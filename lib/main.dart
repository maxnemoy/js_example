import 'package:flutter/material.dart';

import 'dart:js' as jsDart;

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Home(),
    );
  }
}

class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  void _simpl() {
    jsDart.context.callMethod("simple_call", ["dart"]);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("JS call"),
      ),
      body: Column(children: [
        ElevatedButton(onPressed: _simpl, child: const Text("Simpl")),
      ]),
    );
  }
}
