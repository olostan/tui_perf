// Copyright (c) 2017, vshybanov. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

//import 'package:angular/platform/browser.dart';

import 'package:slides_tui/app_component.dart';

import 'package:http/browser_client.dart';
import 'package:angular/angular.dart';

BrowserClient HttpClientBackendServiceFactory() =>
    new BrowserClient();

void main() {
  bootstrap(AppComponent, const [
    //  BrowserClient
    const Provider(BrowserClient,
        useFactory: HttpClientBackendServiceFactory, deps: const [])
  ]);
}
