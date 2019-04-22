# Anime faces WGAN-GP Generator #

![demo](https://raw.githubusercontent.com/viuts/wgan-animefaces/master/playground/public/images/demo.png?token=AD2LWKJHVADSPYVFPVXVBES4XVNYI "Demo")

## Step 1

Train the model with pytorch, the script is avaliable in train.ipynb, dataset can be downloaded from [kaggle](https://www.kaggle.com/xxc025/animefaces/kernels "data")

## Step 2

Transfer the model to ONNX -> Tensorflow -> TFJS, script is avaliable in ToONNX.ipynb

## Step 3

Place the trained model in `playground/public/converted`

## Step 4

Run `npm start` in playground