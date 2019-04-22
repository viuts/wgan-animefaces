import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';

const MODEL_URL = '../models/converted/model.json';

const makeGrid = async (tensor) => {
    const array = await tensor.array()
    array.forEach((image, index) => {
        const tensor3D = tf.tensor(image).transpose([1, 2, 0]).sigmoid()
        const outputElement = document.getElementById(`generate-output-${index}`)
        tf.browser.toPixels(tensor3D, outputElement)
    })
}

class Generator {
    constructor() {
        this._init()
    }

    async _init() {
        this.model = await loadGraphModel(MODEL_URL);
        console.log('model loaded')
    }

    async generate() {
        if (!this.model) {
            console.log('model is not inited')
            return
        }
        // creating an array of input Tensors is the easiest way. For other options see the API documentation
        const inputs = tf.randomNormal([64, 128])
        // run this in an async method:
        const outputs = this.model.execute(inputs);
        const outputElement = document.getElementById(`generate-output-0`)
        await makeGrid(outputs)
    }
}

export default Generator