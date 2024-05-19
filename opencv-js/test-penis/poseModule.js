import * as cv from '@techstark/opencv-js';
import * as mpPose from '@mediapipe/pose';

class PoseDetector {
    constructor(
        mode = false,
        complexity = 1,
        smoothLandmarks = true,
        enableSegmentation = false,
        smoothSegmentation = true,
        detectionCon = 0.5,
        trackCon = 0.5
    ) {
        this.mode = mode;
        this.complexity = complexity;
        this.smoothLandmarks = smoothLandmarks;
        this.enableSegmentation = enableSegmentation;
        this.smoothSegmentation = smoothSegmentation;
        this.detectionCon = detectionCon;
        this.trackCon = trackCon;

        this.pose = new mpPose.Pose({
            locateFile: (file) =>
                `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
            mode: this.mode,
            complexity: this.complexity,
            smoothLandmarks: this.smoothLandmarks,
            enableSegmentation: this.enableSegmentation,
            smoothSegmentation: this.smoothSegmentation,
            minDetectionConfidence: this.detectionCon,
            minTrackingConfidence: this.trackCon,
        });

        this.pose.onResults(this.onResults.bind(this));
    }

    onResults(results) {
        this.results = results;
    }

    async findPose(img, draw = true) {
        const imgData = new cv.Mat(img.height, img.width, cv.CV_8UC4);
        cv.imshow(imgData, img);

        const { data } = imgData;
        const imageData = new ImageData(
            new Uint8ClampedArray(data),
            img.width,
            img.height
        );

        await this.pose.send({ image: imageData });

        if (this.results.poseLandmarks && draw) {
            const canvasCtx = img.getContext('2d');
            mpPose.drawLandmarks(
                canvasCtx,
                this.results.poseLandmarks,
                mpPose.POSE_CONNECTIONS
            );
        }

        return img;
    }

    findPosition(img, draw = true) {
        this.lmList = [];
        if (this.results.poseLandmarks) {
            const canvasCtx = img.getContext('2d');
            for (let id = 0; id < this.results.poseLandmarks.length; id++) {
                const lm = this.results.poseLandmarks[id];
                const cx = lm.x * img.width;
                const cy = lm.y * img.height;
                this.lmList.push([id, cx, cy]);

                if (draw) {
                    canvasCtx.beginPath();
                    canvasCtx.arc(cx, cy, 5, 0, 2 * Math.PI);
                    canvasCtx.fillStyle = 'red';
                    canvasCtx.fill();
                }
            }
        }
        return this.lmList;
    }

    findAngle(img, p1, p2, p3, draw = true) {
        const [x1, y1] = this.lmList[p1].slice(1);
        const [x2, y2] = this.lmList[p2].slice(1);
        const [x3, y3] = this.lmList[p3].slice(1);

        const angle =
            Math.atan2(y3 - y2, x3 - x2) - Math.atan2(y1 - y2, x1 - x2);
        const degrees = Math.abs(angle * (180 / Math.PI));
        const finalAngle = degrees > 180 ? 360 - degrees : degrees;

        if (draw) {
            const canvasCtx = img.getContext('2d');
            canvasCtx.beginPath();
            canvasCtx.moveTo(x1, y1);
            canvasCtx.lineTo(x2, y2);
            canvasCtx.lineTo(x3, y3);
            canvasCtx.strokeStyle = 'white';
            canvasCtx.lineWidth = 3;
            canvasCtx.stroke();

            [x1, y1, x2, y2, x3, y3].forEach((coord, index) => {
                canvasCtx.beginPath();
                canvasCtx.arc(
                    coord,
                    index % 2 === 0 ? x1 : y1,
                    5,
                    0,
                    2 * Math.PI
                );
                canvasCtx.fillStyle = 'red';
                canvasCtx.fill();
            });

            canvasCtx.font = '30px Arial';
            canvasCtx.fillStyle = 'red';
            canvasCtx.fillText(Math.round(finalAngle), x2 - 50, y2 + 50);
        }

        return finalAngle;
    }
}

async function main() {
    const detector = new PoseDetector();
    const videoElement = document.createElement('video');

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
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.width;
        canvas.height = videoElement.height;
        document.body.appendChild(canvas);
        const canvasCtx = canvas.getContext('2d');

        function detectPose() {
            canvasCtx.drawImage(
                videoElement,
                0,
                0,
                canvas.width,
                canvas.height
            );
            detector.findPose(canvas, true);
            requestAnimationFrame(detectPose);
        }
        detectPose();
    });
}

main();
