import 'package:flutter/material.dart';

import 'auth/login.dart';

void main() => runApp(Hydralite());

class Hydralite extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Login(),
    );
  }
}
