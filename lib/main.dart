import 'package:darkness_dungeon/menu.dart';
import 'package:darkness_dungeon/util/localization/my_localizations_delegate.dart';
import 'package:flame/flame.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

import 'util/sounds.dart';

double tileSize = 32;

void initializeDeviceSettings() async {
  if (!kIsWeb) {
    try {
      await Flame.device.setLandscape();
      await Flame.device.fullScreen();
    } catch (e) {
      // Log or handle the error
      print('Error setting device settings: $e');
    }
  }
}

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Configure device settings for non-web platforms
  initializeDeviceSettings();

  // Initialize game sounds
  await Sounds.initialize();

  // Localization delegate
  MyLocalizationsDelegate myLocation = const MyLocalizationsDelegate();

  // Run the app
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        fontFamily: 'Normal',
      ),
      home: Menu(),
      supportedLocales: MyLocalizationsDelegate.supportedLocales(),
      localizationsDelegates: [
        myLocation,
        DefaultCupertinoLocalizations.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ],
      localeResolutionCallback: myLocation.resolution,
    ),
  );
}
