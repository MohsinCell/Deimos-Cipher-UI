{
  "targets": [
    {
      "target_name": "deimos_cipher",
      "sources": [
        "src/addon/binding.cc",
        "src/addon/core.cpp"
      ],
      "include_dirs": [
        "<!(node -p \"require('node-addon-api').include\")",
        "./node_modules/node-addon-api",
        "src/addon/"
      ],
      "libraries": ["-lsodium", "-lssl", "-lcrypto"],
      "cflags_cc": ["-std=c++17", "-fexceptions"]
    }
  ]
}
