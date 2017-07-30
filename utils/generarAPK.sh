#!/bin/bash

NOMBRE_APK="ieeeday.apk"
NOMBRE_DIR_PROYECTO="ieeeDay"
NOMBRE_CLAVE="key123.keystore"
ALIAS_CLAVE="key123"

rm $NOMBRE_APK;

cd $NOMBRE_DIR_PROYECTO;
ionic build android --release --prod
cd ..;

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $NOMBRE_CLAVE $NOMBRE_DIR_PROYECTO/platforms/android/build/outputs/apk/android-release-unsigned.apk $ALIAS_CLAVE;

$ANDROID_HOME/build-tools/25.0.2/zipalign -v 4 $NOMBRE_DIR_PROYECTO/platforms/android/build/outputs/apk/android-release-unsigned.apk $NOMBRE_APK;
