Electron web contents crash when converting buffer from sharp to blob.

To run:


```
npm install
npm run rebuild
npm run start
```

Crash:

```
[19894:0123/084350.282504:FATAL:V8ArrayBuffer.cpp(59)] Check failed: wrapperTypeInfo.
0   Electron Framework                  0x00000001053fc7bc crashpad::CloseMultipleNowOrOnExec(int, int) + 934076
1   Electron Framework                  0x00000001053c6da3 crashpad::CloseMultipleNowOrOnExec(int, int) + 714403
2   Electron Framework                  0x00000001080a45fd crashpad::CloseMultipleNowOrOnExec(int, int) + 47759101
3   Electron Framework                  0x000000010821f10f crashpad::CloseMultipleNowOrOnExec(int, int) + 49310223
4   Electron Framework                  0x00000001080a4a9f crashpad::CloseMultipleNowOrOnExec(int, int) + 47760287
5   Electron Framework                  0x000000010808d4b0 crashpad::CloseMultipleNowOrOnExec(int, int) + 47664560
6   Electron Framework                  0x000000010808d5b8 crashpad::CloseMultipleNowOrOnExec(int, int) + 47664824
7   Electron Framework                  0x00000001080a7f3c crashpad::CloseMultipleNowOrOnExec(int, int) + 47773756
8   Electron Framework                  0x00000001080a7914 crashpad::CloseMultipleNowOrOnExec(int, int) + 47772180
9   libnode.dylib                       0x000000010999ff21 v8::internal::StrDup(char const*) + 609
10  libnode.dylib                       0x0000000109a548c4 v8::internal::compiler::BranchElimination::ControlPathConditions::operator==(v8::internal::compiler::BranchElimination::ControlPathConditions const&) const + 3076
11  libnode.dylib                       0x0000000109a5426e v8::internal::compiler::BranchElimination::ControlPathConditions::operator==(v8::internal::compiler::BranchElimination::ControlPathConditions const&) const + 1454
12  ???                                 0x00001b3b9c70437d 0x0 + 29942841623421
13  ???                                 0x00001b3b9c7b76bd 0x0 + 29942842357437
```
