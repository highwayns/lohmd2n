Tensorflow.js
===
* knowledgeid: -LdLtaiBADqiIat-6k_7
* author: tei952
* authorid: iHmcxnnRDWPOJAE38On1nCdq0ir2

## 1.0 Generate an Angular App
```
npm install -g @angular/cli
ng new tensorflowApp
```

## 2.0 Install Tensorflow.js
```
cd tensorflowApp
npm install @tensorflow/tfjs --save

But instead of using a pre-install, I just hand edited
`node_modules/@angular-devkit/build-angular/src/angular
-cli-files/models/webpack-configs/browser.js' and 
changed the lines in that regex:
// old:
node: false,
// new:
node: { crypto: true, stream: true },
```

## 3.0 Train a Basic TensorFlow.js Linear Model
```
In the following section I will show you how to build,
 train, and make predictions with TensorFlow.js. Our 
 ML model is just a simple linear regression that 
 takes a 1-dimensional value as its input and attempts
  to fit a straight line to the dataset.
 
After the model is trained, we will show the user a 
form input that will make a new prediction when the 
value changes. 
```

## 4.0 Import TensorFlow.js
```
I will be writing all the code in app.component.ts. 
Notice how we are calling the train() method when the
 component is initialized. 
import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({...})
export class AppComponent implements OnInit {

  linearModel: tf.Sequential;
  prediction: any;

  ngOnInit() {
    this.train();
  }


  async train() {
    // todo
  }

  predict(val) {
    // todo
  }
```

## 5.0 Build a Machine Learning Model
```
Machine learning models are trained by iterating over 
batches of samples and slowly optimizing the prediction.
 Most neural networks use some variation of gradient 
 descent as an optimizer - we’re using Stochastic Gradient 
 Descent (SGD) to minimize the Mean Squared Error (MSE). 
 This is a highly complex area that could fill an entire
  book. 
async train(): Promise<any> {
    // Define a model for linear regression.
  this.linearModel = tf.sequential();
  this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));

  // Prepare the model for training: Specify the loss and the optimizer.
  this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});


  // Training data, completely random stuff
  const xs = tf.tensor1d([3.2, 4.4, 5.5]);
  const ys = tf.tensor1d([1.6, 2.7, 3.5]);


  // Train
  await this.linearModel.fit(xs, ys)

  console.log('model trained!')
}
What the hell is a tensor? There’s no easy explanation, but just think 
Tensor === Array. It’s really just an abstraction of a multi-dimensional 
array for doing math in TensorFlow. If you want a detailed physical 
explanation, watch this professor’s breakdown.
```

## 6.0 Make a Prediction with the Model
```
Now that our model is trained, we can feed it values to make 
predictions. TensorFlow runs in the context of a session, so 
we need to call dataSync on the Tensor value to extract the 
data out into something usable in JavaScript. 
predict(val: number) {
  const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
  this.prediction = Array.from(output.dataSync())[0]
}
We can run this method as an event handler when the file of an HTML 
form input changes. 
TensorFlow says {{ prediction }}

<input type="number" (change)="predict($event.target.value)">
```

## 7.0 How to use Pre-Trained Python Keras Models
```
Training a model can be extremely CPU and memory intensive - that’s 
why most models are trained on high-powered GPUs that can distribute 
billions of matrix multiplication operations efficiently. 
Fortunately, we can use pre-trained models to bypass this step 
completely. This means we can skip straight to the fun part - making 
predictions. You can find models for a sorts of different applications 
on Kaggle Kernels. 
In the steps below, we will convert a Keras-based Convolutional Neural
 Network into a model that predicts the value of a handwritten digit 
 from the famous MNIST dataset. 
```

## 8.0 Convert a Keras Model to TensorFlow.js
```
TensorFlow.js has a Python CLI tool that converts an h5 model saved in 
Keras to a set files that can be used on the web. Install it by running:
pip install tensorflowjs
At this point, you will need to have a Keras model saved on your local 
system. If you clone the project for this lesson, you can run the 
following command to generate your model. 
tensorflowjs_converter --input_format keras \
                       keras/cnn.h5 \
                       src/assets
Currently, I am saving the output in the assets folder of the Angular app,
 but TF can also read from a URL, so you can also save your model files 
 in a cloud storage bucket. 
```

## 9.0 Load the Model
```
Now we load the model with a simple one-liner. 
async loadModel() {
  this.model = await tf.loadModel('/assets/model.json');
}
```

## 10.0 Make Predictions from Image Data
```
Now that our model is loaded, it is expecting 4-dimensional image data 
in a shape of [any, 28, 28, 1] - that translates into batchsize, width 
pixels, height pixels, and color channels. An even simpler way to think 
about it is just an array of images with a single color channel. 
We run our predictions inside of tf.tidy to clean up the intermediate 
memory allocated to the tensors. Basically, we are just trying to avoid 
memory leaks. 
TensorFlow.js gives us a fromPixels helper to convert an ImageData HTML
 object into a Tensor. You can also use a plain HTMLImageElement or even 
 a video. Under the hood it turns the pixels into a 3D matrix of numbers. 
async predict(imageData: ImageData) {

  await tf.tidy(() => {

    // Convert the canvas pixels to a Tensor of the matching shape
    let img = tf.fromPixels(imageData, 1);
    img = img.reshape([1, 28, 28, 1]);
    img = tf.cast(img, 'float32');

    // Make and format the predications
    const output = this.model.predict(img) as any;

    // Save predictions on the component
    this.predictions = Array.from(output.dataSync()); 
  });

}
The result of this method is an Array of 10 values that add up to a
 total of 1, which is a prediction function known as softmax. We can
  use the index with highest probability as the prediction for the digit.
Given the prediction below, the model interprets the image drawn on
 the canvas is a value of 2 with 93% confidence.
[0.02, 0.003, 0.93, ...]
```

## 11.0 The End
```
Building and training machine learning models in the browser ushers
 in a whole new set of possibilities for web developers. I’m excited 
 to see what people create with TensorFlow.js and hope this guide 
 helps kickstart your project. If you want to see more advanced 
 TensorFlow content, let me know in the comments or on Slack. 
 ```
## 12.9 御修了ありがとうございました。
* certificatePath: https://firebasestorage.googleapis.com/v0/b/wohapp-3a179.appspot.com/o/knowledgecontents%2FiHmcxnnRDWPOJAE38On1nCdq0ir2%2F-LdLtaiBADqiIat-6k_7x12?alt=media&token=ac3208d0-60fb-4190-be81-26f2e6788424
