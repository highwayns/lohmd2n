## 1.0 ML Kit For Firebaseとは
```
ML Kitはモバイル端末上で機械学習を扱いやすくするためのパッケージです。
今はパブリックベータ公開ではありますが、Firebaseで使うことができます。
```

## 2.0 BaseAPI
```
次のような機能がBase APIとして用意されています。学習済みのモデルを
使った機能なので、自分でモデルを用意する必要がなく、お手軽に使うことが
出来ます。クラウドAPIと端末内APIがあり、端末内APIはオフライン状態でも
使うことが出来ます。クラウドAPIは内部的にCLOUD Vision APIを使ってい
るのでCLOUD Vision APIと同じ料金が掛かります。端末内APIは無料で利用
できます。
```

## 3.0 画像分類
```
画像に表示されている物や場所、動き、動物などを分類するものです。端末内
APIとクラウドAPIの両方に対応。
FirebaseVisionCloudDetectorOptions options =
    new FirebaseVisionCloudDetectorOptions.Builder()
        .setModelType(FirebaseVisionCloudDetectorOptions.LATEST_MODEL)
        .setMaxResults(15)
        .build();
        
FirebaseVisionCloudLabelDetector detector = FirebaseVision.getInstance()
    .getVisionCloudLabelDetector(options);
    
FirebaseVisionImageMetadata metadata = new FirebaseVisionImageMetadata.Builder()
    .setWidth(1280)
    .setHeight(720)
    .setFormat(FirebaseVisionImageMetadata.IMAGE_FORMAT_NV21)
    .setRotation(FirebaseVisionImageMetadata.ROTATION_0)
    .build();
    
FirebaseVisionImageMetadata metadata = new FirebaseVisionImageMetadata.Builder()
    .setRotation(FirebaseVisionImageMetadata.ROTATION_0)
    .build();
    
Task<SparseArray<FirebaseVisionCloudLabel>> result =
    detector.detectInImage(image, metadata)  // or detectInBuffer(buffer, metadata)
    .addOnSuccessListener(
        this,
        new OnSuccessListener<SparseArray<FirebaseVisionCloudLabel>>() {
          @Override
          public void onSuccess(SparseArray<FirebaseVisionCloudLabel> label) {
            // Task completed successfully
            // ...
          }
        })
    .addOnFailureListener(
        this,
        new OnFailureListener() {
          @Override
          public void onFailure(@NonNull Exception e) {
            // Task failed with an exception
            // ...
          }
        });
        
for(int i = 0; i < labels.size(); i++) {
  FirebaseVisionCloudLabel label = labels.valueAt(i);

  Rect bounds = label.getBoundingBox();
  String label = label.getLabel();
  String entityId = label.getEntityId();
  float confidence = label.getScore();
}
```

## 4.0 文字認識
```
画像に表示されている文字を検出し、認識します。端末内APIとクラウドAPIの
両方に対応。
FirebaseVisionImage image = FirebaseVisionImage.fromBitmap(bitmap);
private static final SparseIntArray ORIENTATIONS = new SparseIntArray();
static {
    ORIENTATIONS.append(Surface.ROTATION_0, 90);
    ORIENTATIONS.append(Surface.ROTATION_90, 0);
    ORIENTATIONS.append(Surface.ROTATION_180, 270);
    ORIENTATIONS.append(Surface.ROTATION_270, 180);
}

/**
 * Get the angle by which an image must be rotated given the device's current
 * orientation.
 */
@RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
private int getRotationCompensation(String cameraId, Activity activity, Context context)
        throws CameraAccessException {
    // Get the device's current rotation relative to its "native" orientation.
    // Then, from the ORIENTATIONS table, look up the angle the image must be
    // rotated to compensate for the device's rotation.
    int deviceRotation = activity.getWindowManager().getDefaultDisplay().getRotation();
    int rotationCompensation = ORIENTATIONS.get(deviceRotation);

    // On most devices, the sensor orientation is 90 degrees, but for some
    // devices it is 270 degrees. For devices with a sensor orientation of
    // 270, rotate the image an additional 180 ((270 + 270) % 360) degrees.
    CameraManager cameraManager = (CameraManager) context.getSystemService(CAMERA_SERVICE);
    int sensorOrientation = cameraManager
            .getCameraCharacteristics(cameraId)
            .get(CameraCharacteristics.SENSOR_ORIENTATION);
    rotationCompensation = (rotationCompensation + sensorOrientation + 270) % 360;

    // Return the corresponding FirebaseVisionImageMetadata rotation value.
    int result;
    switch (rotationCompensation) {
        case 0:
            result = FirebaseVisionImageMetadata.ROTATION_0;
            break;
        case 90:
            result = FirebaseVisionImageMetadata.ROTATION_90;
            break;
        case 180:
            result = FirebaseVisionImageMetadata.ROTATION_180;
            break;
        case 270:
            result = FirebaseVisionImageMetadata.ROTATION_270;
            break;
        default:
            result = FirebaseVisionImageMetadata.ROTATION_0;
            Log.e(TAG, "Bad rotation value: " + rotationCompensation);
    }
    return result;
}

FirebaseVisionImage image = FirebaseVisionImage.fromMediaImage(mediaImage, rotation);

FirebaseVisionImage image;
try {
    image = FirebaseVisionImage.fromFilePath(context, uri);
} catch (IOException e) {
    e.printStackTrace();
}
FirebaseVisionTextRecognizer detector = FirebaseVision.getInstance()
        .getOnDeviceTextRecognizer();
FirebaseVisionTextRecognizer detector = FirebaseVision.getInstance()
        .getCloudTextRecognizer();
// Or, to change the default settings:
//   FirebaseVisionTextRecognizer detector = FirebaseVision.getInstance()
//          .getCloudTextRecognizer(options);
TextRecognitionActivity.java

// Or, to provide language hints to assist with language detection:
// See https://cloud.google.com/vision/docs/languages for supported languages
FirebaseVisionCloudTextRecognizerOptions options = new FirebaseVisionCloudTextRecognizerOptions.Builder()
        .setLanguageHints(Arrays.asList("en", "hi"))
        .build();
Task<FirebaseVisionText> result =
        detector.processImage(image)
                .addOnSuccessListener(new OnSuccessListener<FirebaseVisionText>() {
                    @Override
                    public void onSuccess(FirebaseVisionText firebaseVisionText) {
                        // Task completed successfully
                        // ...
                    }
                })
                .addOnFailureListener(
                        new OnFailureListener() {
                            @Override
                            public void onFailure(@NonNull Exception e) {
                                // Task failed with an exception
                                // ...
                            }
                        });
String resultText = result.getText();
for (FirebaseVisionText.TextBlock block: result.getTextBlocks()) {
    String blockText = block.getText();
    Float blockConfidence = block.getConfidence();
    List<RecognizedLanguage> blockLanguages = block.getRecognizedLanguages();
    Point[] blockCornerPoints = block.getCornerPoints();
    Rect blockFrame = block.getBoundingBox();
    for (FirebaseVisionText.Line line: block.getLines()) {
        String lineText = line.getText();
        Float lineConfidence = line.getConfidence();
        List<RecognizedLanguage> lineLanguages = line.getRecognizedLanguages();
        Point[] lineCornerPoints = line.getCornerPoints();
        Rect lineFrame = line.getBoundingBox();
        for (FirebaseVisionText.Element element: line.getElements()) {
            String elementText = element.getText();
            Float elementConfidence = element.getConfidence();
            List<RecognizedLanguage> elementLanguages = element.getRecognizedLanguages();
            Point[] elementCornerPoints = element.getCornerPoints();
            Rect elementFrame = element.getBoundingBox();
        }
    }
}

```

## 5.0 顔検出
```
画像内の顔を検出します。顔の各パーツの位置なども検出できます。端末内API
のみ対応。
FirebaseVisionFaceDetectorOptions options =
    new FirebaseVisionFaceDetectorOptions.Builder()
        .setModeType(FirebaseVisionFaceDetectorOptions.ACCURATE_MODE)
        .setLandmarkType(FirebaseVisionFaceDetectorOptions.ALL_LANDMARKS)
        .setClassificationType(FirebaseVisionFaceDetectorOptions.ALL_CLASSIFICATIONS)
        .setMinFaceSize(0.2f)
        .setTrackingEnabled(true)
        .build();
FirebaseVisionFaceDetector detector = FirebaseVision.getInstance()
    .getVisionFaceDetector(options);
FirebaseVisionImageMetadata metadata = new FirebaseVisionImageMetadata.Builder()
    .setWidth(1280)
    .setHeight(720)
    .setFormat(FirebaseVisionImageMetadata.IMAGE_FORMAT_NV21)
    .setRotation(FirebaseVisionImageMetadata.ROTATION_0)
    .build();
FirebaseVisionImageMetadata metadata = new FirebaseVisionImageMetadata.Builder()
    .setRotation(FirebaseVisionImageMetadata.ROTATION_0)
    .build();
Task<SparseArray<FirebaseVisionFace>> result =
    detector.detectInImage(image, metadata)  // or detectInBuffer(buffer, metadata)
    .addOnSuccessListener(
        this,
        new OnSuccessListener<SparseArray<FirebaseVisionFace>>() {
          @Override
          public void onSuccess(SparseArray<FirebaseVisionFace> faces) {
            // Task completed successfully
            // ...
          }
        })
    .addOnFailureListener(
        this,
        new OnFailureListener() {
          @Override
          public void onFailure(@NonNull Exception e) {
            // Task failed with an exception
            // ...
          }
        });
for(int i = 0; i < faces.size(); i++) {
  FirebaseVisionFace face = faces.valueAt(i);

  Rect bounds = face.getBoundingBox();
  if (face.hasHeadEulerAngleY()) {
    float rotY = face.getHeadEulerAngleY();  // Head is rotated to the right rotY degrees
  }
  if (face.hasHeadEulerAngleZ()) {
    float rotZ = face.getHeadEulerAngleZ();  // Head is rotated upward rotZ degrees
  }

  // If landmark detection was enabled (mouth, ears, eyes, cheeks, and
  // nose available):
  if (face.hasLeftEarPosition()) {
    PointF leftEarPos = face.getLeftEarPosition();
  }
  if (face.hasNoseBasePosition()) {
    PointF nosePos = face.getNoseBasePosition();
  }

  // If classification was enabled:
  if (face.hasSmilingProbability()) {
    float smileProb = face.getSmilingProbability();
  }
  if (face.hasRightEyeOpenProbability()) {
    float rightEyeOpenProb = face.getRightEyeOpenProbability();
  }

  // If face tracking was enabled:
  if (face.hasTrackingId()) {
    int id = face.getTrackingId();
  }
}
```

## 6.0 バーコードスキャン
```
画像内のバーコードを検出し、その内容を表示します。端末内APIのみ対応。
FirebaseVisionBarcodeDetectorOptions options =
    new FirebaseVisionBarcodeDetectorOptions.Builder()
        .setBarcodeFormats(FirebaseVisionBarcode.FORMAT_QR_CODE,
                           FirebaseVisionBarcode.FORMAT_AZTEC)
        .build();
FirebaseVisionBarcodeDetector detector = FirebaseVision.getInstance()
    .getVisionBarcodeDetector(options);
FirebaseVisionImageMetadata metadata = new FirebaseVisionImageMetadata.Builder()
    .setWidth(1280)
    .setHeight(720)
    .setFormat(FirebaseVisionImageMetadata.IMAGE_FORMAT_NV21)
    .setRotation(FirebaseVisionImageMetadata.ROTATION_0)
    .build();
FirebaseVisionImageMetadata metadata = new FirebaseVisionImageMetadata.Builder()
    .setRotation(FirebaseVisionImageMetadata.ROTATION_0)
    .build();
Task<SparseArray<FirebaseVisionBarcode>> result =
    detector.detectInImage(image, metadata)  // or detectInBuffer(buffer, metadata)
    .addOnSuccessListener(
        this,
        new OnSuccessListener<SparseArray<FirebaseVisionBarcode>>() {
          @Override
          public void onSuccess(SparseArray<FirebaseVisionBarcode> barcodes) {
            // Task completed successfully
            // ...
          }
        })
    .addOnFailureListener(
        this,
        new OnFailureListener() {
          @Override
          public void onFailure(@NonNull Exception e) {
            // Task failed with an exception
            // ...
          }
        });
 
for(int i = 0; i < barcodes.size(); i++) {
  FirebaseVisionBarcode barcode = barcodes.valueAt(i);

  Rect bounds = barcode.getBoundingBox();
  Point[] corners = barcode.getCornerPoints();

  String rawValue = barcode.getRawValue();

  int valueType = barcode.getValueType();
  // See API reference for complete list of supported types
  switch (valueType) {
    case FirebaseVisionBarcode.TYPE_WIFI:
      String ssid = barcode.getWifi().getSsid();
      String password = barcode.getWifi().getPassword();
      int type = barcode.getWifi().getEncryptionType();
      break;
    case FirebaseVisionBarcode.TYPE_URL:
      String title = barcode.getUrl().getTitle();
      String url = barcode.getUrl().getUrl();
      break;
  }
}
```

## 7.0 ランドマーク認識
```
画像内のランドマーク（有名な建築物など）を検出します。クラウドAPIのみ
対応。
FirebaseVisionCloudDetectorOptions options =
    new FirebaseVisionCloudDetectorOptions.Builder()
        .setModelType(FirebaseVisionCloudDetectorOptions.LATEST_MODEL)
        .setMaxResults(15)
        .build();
FirebaseVisionCloudLandmarkDetector detector = FirebaseVision.getInstance()
    .getVisionCloudLandmarkDetector(options);
FirebaseVisionImageMetadata metadata = new FirebaseVisionImageMetadata.Builder()
    .setWidth(1280)
    .setHeight(720)
    .setFormat(FirebaseVisionImageMetadata.IMAGE_FORMAT_NV21)
    .setRotation(FirebaseVisionImageMetadata.ROTATION_0)
    .build();
FirebaseVisionImageMetadata metadata = new FirebaseVisionImageMetadata.Builder()
    .setRotation(FirebaseVisionImageMetadata.ROTATION_0)
    .build();
Task<SparseArray<FirebaseVisionCloudLandmark>> result =
    detector.detectInImage(image, metadata)  // or detectInBuffer(buffer, metadata)
    .addOnSuccessListener(
        this,
        new OnSuccessListener<SparseArray<FirebaseVisionCloudLandmark>>() {
          @Override
          public void onSuccess(SparseArray<FirebaseVisionCloudLandmark> landmarks) {
            // Task completed successfully
            // ...
          }
        })
    .addOnFailureListener(
        this,
        new OnFailureListener() {
          @Override
          public void onFailure(@NonNull Exception e) {
            // Task failed with an exception
            // ...
          }
        });
   for(int i = 0; i < landmarks.size(); i++) {
  FirebaseVisionCloudLandmark landmark = landmarks.valueAt(i);

  Rect bounds = landmark.getBoundingBox();
  String landmarkName = landmark.getlandmark();
  String entityId = landmark.getEntityId();
  float confidence = landmark.getScore();

  // Multiple locations are possible, e.g., the location of the depicted
  // landmark and the location the picture was taken.
  for (FirebaseVisionLatLng loc: landmark.getLocations()) {
    double latitude = loc.getLatitude();
    double longitude = loc.getLongitude();
  }
}
```

## 8.0 カスタムモデル
```
BaseAPIの機能以外にも自らで用意したモデルもTensorFlow Liteで読み込め
る形式であれば使うことが出来ます。
特徴としては次のようなものがあります。
Firebase上にモデルを置いておくことができます。アプリ内にバンドルするこ
ともできます。
Firebase上のモデルを更新すると、アプリ側で自動でダウンロードさせて端末
内のモデルを更新させることができます。
Firebase上のモデルと端末内のモデルを使用することができ、Firebase上のモ
デルが使用できなければ端末内のものを使うということも出来ます。 
今回はあまりカスタムモデルの実装の仕方については触れません。Codelabsに
例があるので、そちらを確認して頂ければと思います。
FirebaseModelDownloadConditions.Builder conditionsBuilder =
        new FirebaseModelDownloadConditions.Builder().requireWifi();
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
    // Enable advanced conditions on Android Nougat and newer.
    conditionsBuilder = conditionsBuilder
            .requireCharging()
            .requireDeviceIdle();
}
FirebaseModelDownloadConditions conditions = conditionsBuilder.build();

// Build a remote model source object by specifying the name you assigned the model
// when you uploaded it in the Firebase console.
FirebaseRemoteModel cloudSource = new FirebaseRemoteModel.Builder("my_cloud_model")
        .enableModelUpdates(true)
        .setInitialDownloadConditions(conditions)
        .setUpdatesDownloadConditions(conditions)
        .build();
FirebaseModelManager.getInstance().registerRemoteModel(cloudSource);
import tensorflow as tf

interpreter = tf.lite.Interpreter(model_path="my_model.tflite")
interpreter.allocate_tensors()

# Print input shape and type
print(interpreter.get_input_details()[0]['shape'])  # Example: [1 224 224 3]
print(interpreter.get_input_details()[0]['dtype'])  # Example: <class 'numpy.float32'>

# Print output shape and type
print(interpreter.get_output_details()[0]['shape'])  # Example: [1 1000]
print(interpreter.get_output_details()[0]['dtype'])  # Example: <class 'numpy.float32'>
FirebaseModelInputOutputOptions inputOutputOptions =
        new FirebaseModelInputOutputOptions.Builder()
                .setInputFormat(0, FirebaseModelDataType.FLOAT32, new int[]{1, 224, 224, 3})
                .setOutputFormat(0, FirebaseModelDataType.FLOAT32, new int[]{1, 5})
                .build();
Bitmap bitmap = getYourInputImage();
bitmap = Bitmap.createScaledBitmap(bitmap, 224, 224, true);

int batchNum = 0;
float[][][][] input = new float[1][224][224][3];
for (int x = 0; x < 224; x++) {
    for (int y = 0; y < 224; y++) {
        int pixel = bitmap.getPixel(x, y);
        // Normalize channel values to [-1.0, 1.0]. This requirement varies by
        // model. For example, some models might require values to be normalized
        // to the range [0.0, 1.0] instead.
        input[batchNum][x][y][0] = (Color.red(pixel) - 127) / 128.0f;
        input[batchNum][x][y][1] = (Color.green(pixel) - 127) / 128.0f;
        input[batchNum][x][y][2] = (Color.blue(pixel) - 127) / 128.0f;
    }
}
FirebaseModelInputs inputs = new FirebaseModelInputs.Builder()
        .add(input)  // add() as many input arrays as your model requires
        .build();
firebaseInterpreter.run(inputs, inputOutputOptions)
        .addOnSuccessListener(
                new OnSuccessListener<FirebaseModelOutputs>() {
                    @Override
                    public void onSuccess(FirebaseModelOutputs result) {
                        // ...
                    }
                })
        .addOnFailureListener(
                new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        // Task failed with an exception
                        // ...
                    }
                });
float[][] output = result.getOutput(0);
float[] probabilities = output[0];
BufferedReader reader = new BufferedReader(
        new InputStreamReader(getAssets().open("retrained_labels.txt")));
for (int i = 0; i < probabilities.length; i++) {
    String label = reader.readLine();
    Log.i("MLKit", String.format("%s: %1.4f", label, probabilities[i]));
}

```

## 9.0 TensorFlow Liteとは
```
TensorFlow LiteはTensorFlowのモバイル向けのライブラリ群です。専用のモ
デルのフォーマットを使うなどして、TensorFlowをモバイル用に最適化したも
のです。
今の所はTensorFlow Liteはデベロッパープレビューとして公開されています。
なので、事前に検証された機械学習もまだまだ少なく、機能としても少ない状態
です。しかし、同様のモバイル向けのTensorFlowとして公開されている
TensorFlow Mobileに比べてより軽量でパフォーマンスの良いアプリケーション
を開発できると謳われています。なので今の所は、サービスに使うのであれば
TensorFlow Mobileを使用し、今後の正式リリースに備えてTensorFlow Liteを
検証して追いかけておく、というのが良さそうです。
bazel build --cxxopt='--std=c++11' -c opt        \
  --fat_apk_cpu=x86,x86_64,arm64-v8a,armeabi-v7a   \
  //tensorflow/lite/java:tensorflow-lite
  
  mvn install:install-file -Dfile=bazel-genfiles/tensorflow/lite/java/tensorflow-lite.aar -DgroupId=org.tensorflow \
  -DartifactId=tensorflow-lite -Dversion=0.1.100 -Dpackaging=aar
```

## 10.0 クイックスタートをやってみた
```
ML Kitのクイックスタートを使って、試してみました。 内容としてはAndroidで
カメラに表示しているものに対してリアルタイムでBaseAPIの端末内APIを利用し
た検出を行うLivePreviewActivityと、静止画に対してクラウドAPIを利用した
検出を行うStillImageActivityがあります。
```

## 11.0 前提と準備
```
Android Studioを事前にインストールしておく必要があります。
git clone https://github.com/firebase/quickstart-android.git
クローンで落としてきたディレクトリの中のmlkitをAndroid Studioで開きます。
```

## 11.4 Firebase consoleでプロジェクトを作成
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/d9f2249278d042f6b2e6ff6192af078c.png

## 12.0 Androidアプリの追加
```
プロジェクトの作成が出来たら、Androidアプリの追加を行います。
app/build.gradleに記載されているapplicationIdをAndroidパッケージ名とし
て入力して登録します。
```

## 12.4 Androidアプリの追加操作
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/a8444f0f1e08edb548ea1e669e61c559-640x733.png

## 13.4 google-services.jsonダウンロード
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/e065fe3b6ff4136775a23cb818415585-640x664.png

## 14.4 google-services.json移動
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/be268fd4a53299021f09e9fcce715491-640x940.png

## 15.4 従量課金選択
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/firebase_plan-640x493.png

## 16.4 CloudVisionAPIを有効化
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/f5c0555ee16525eb9aae426cee8db58f-640x410.png

## 17.4 実際に動かしてみる
* picturePath: https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/3b3ca3e306e7b59a3d9e05d93e60d84d-640x280.png
