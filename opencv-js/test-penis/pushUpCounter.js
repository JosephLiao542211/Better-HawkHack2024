import * as cv from '@techstark/opencv-js';
import * as mpPose from '@mediapipe/pose';

let cap = new cv.VideoCapture(1); // Open video capture from the default webcam
let detector = new PoseDetector();
let count = 0;
let direction = 0;
let form = 0;
let feedback = 'Fix Form';

async function processFrame() {
    let frame = new cv.Mat();
    cap.read(frame);

    if (frame.empty()) {
        frame.delete();
        return;
    }

    // Determine dimensions of video
    let height = frame.rows;
    let width = frame.cols;

    // Calculate the starting x-coordinate for cropping
    let start_x = Math.floor((width - 608) / 2);

    // Crop the image to 608 pixels width while keeping the height unchanged
    frame = frame.roi(new cv.Rect(start_x, 0, 608, height));

    frame = await detector.findPose(frame, false);
    let lmList = detector.findPosition(frame, false);

    if (lmList.length !== 0) {
        let elbow = detector.findAngle(frame, 11, 13, 15);
        let shoulder = detector.findAngle(frame, 13, 11, 23);
        let hip = detector.findAngle(frame, 11, 23, 25);

        // Percentage of success of pushup
        let per = ((elbow - 90) / (160 - 90)) * 100;

        // Bar to show Pushup progress
        let bar = 380 - ((elbow - 90) / (160 - 90)) * (380 - 50);

        // Check to ensure right form before starting the program
        if (elbow > 160 && shoulder > 40 && hip > 160) {
            form = 1;
        }

        // Check for full range of motion for the pushup
        if (form == 1) {
            if (per === 0) {
                if (elbow <= 90 && hip > 160) {
                    feedback = 'Up';
                    if (direction === 0) {
                        count += 0.5;
                        direction = 1;
                    }
                } else {
                    feedback = 'Fix Form';
                }
            }

            if (per === 100) {
                if (elbow > 160 && shoulder > 40 && hip > 160) {
                    feedback = 'Down';
                    if (direction === 1) {
                        count += 0.5;
                        direction = 0;
                    }
                } else {
                    feedback = 'Fix Form';
                }
            }
        }

        // Draw Bar
        if (form == 1) {
            cv.rectangle(
                frame,
                new cv.Point(580, 50),
                new cv.Point(600, 380),
                [0, 255, 0, 255],
                3
            );
            cv.rectangle(
                frame,
                new cv.Point(580, bar),
                new cv.Point(600, 380),
                [0, 255, 0, 255],
                cv.FILLED
            );
            cv.putText(
                frame,
                `${Math.round(per)}%`,
                new cv.Point(565, 430),
                cv.FONT_HERSHEY_PLAIN,
                2,
                [255, 0, 0, 255],
                2
            );
        }

        // Pushup counter
        cv.rectangle(
            frame,
            new cv.Point(0, 380),
            new cv.Point(100, 480),
            [0, 255, 0, 255],
            cv.FILLED
        );
        cv.putText(
            frame,
            String(Math.round(count)),
            new cv.Point(25, 455),
            cv.FONT_HERSHEY_PLAIN,
            5,
            [255, 0, 0, 255],
            5
        );

        // Feedback
        cv.rectangle(
            frame,
            new cv.Point(500, 0),
            new cv.Point(640, 40),
            [255, 255, 255, 255],
            cv.FILLED
        );
        cv.putText(
            frame,
            feedback,
            new cv.Point(500, 40),
            cv.FONT_HERSHEY_PLAIN,
            2,
            [0, 255, 0, 255],
            2
        );
    }

    cv.imshow('Pushup counter', frame);
    frame.delete();

    // Loop to keep processing frames
    requestAnimationFrame(processFrame);
}

async function main() {
    let videoElement = document.createElement('video');
    videoElement.width = 640;
    videoElement.height = 480;
    document.body.appendChild(videoElement);

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
        });
        videoElement.srcObject = stream;
        videoElement.play();
    }

    videoElement.addEventListener('loadeddata', async () => {
        cap = new cv.VideoCapture(videoElement);

        // Start processing frames
        processFrame();
    });
}

main();
