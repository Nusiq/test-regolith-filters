import os
import std/strformat
import uuid4

if not existsDir("RP"):
    createDir("RP")

writeFile("RP/hello.test", &"{uuid4()}")