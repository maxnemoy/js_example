import 'package:simple/some/bindings.dart';

///js platforms
class SomeLib {
  dynamic getVersion() {
    return getVersionBinding();
  }
}
