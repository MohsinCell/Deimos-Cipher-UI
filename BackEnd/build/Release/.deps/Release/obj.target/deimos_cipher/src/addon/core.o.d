cmd_Release/obj.target/deimos_cipher/src/addon/core.o := g++ -o Release/obj.target/deimos_cipher/src/addon/core.o ../src/addon/core.cpp '-DNODE_GYP_MODULE_NAME=deimos_cipher' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-D__STDC_FORMAT_MACROS' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DBUILDING_NODE_EXTENSION' -I/home/mohsin/.cache/node-gyp/22.14.0/include/node -I/home/mohsin/.cache/node-gyp/22.14.0/src -I/home/mohsin/.cache/node-gyp/22.14.0/deps/openssl/config -I/home/mohsin/.cache/node-gyp/22.14.0/deps/openssl/openssl/include -I/home/mohsin/.cache/node-gyp/22.14.0/deps/uv/include -I/home/mohsin/.cache/node-gyp/22.14.0/deps/zlib -I/home/mohsin/.cache/node-gyp/22.14.0/deps/v8/include "-I../\"/home/mohsin/Deimos-Cipher-UI-main/BackEnd/node_modules/node-addon-api\"" -I../node_modules/node-addon-api -I../src/addon  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -O3 -fno-omit-frame-pointer -fno-rtti -fno-exceptions -fno-strict-aliasing -std=gnu++17 -std=c++17 -fexceptions -MMD -MF ./Release/.deps/Release/obj.target/deimos_cipher/src/addon/core.o.d.raw   -c
Release/obj.target/deimos_cipher/src/addon/core.o: ../src/addon/core.cpp \
 ../src/addon/deimos_cipher.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/evp.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/macros.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/opensslconf.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/configuration.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./configuration_asm.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/configuration.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/opensslv.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./opensslv_asm.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/opensslv.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/types.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/e_os2.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/safestack.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./safestack_asm.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/safestack.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/stack.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/core.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/core_dispatch.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/symhacks.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/bio.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./bio_asm.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/bio.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/crypto.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./crypto_asm.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/crypto.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/cryptoerr.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/cryptoerr_legacy.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/bioerr.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/evperr.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/params.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/bn.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/bnerr.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/objects.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/obj_mac.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/asn1.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./asn1_asm.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/asn1.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/asn1err.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/objectserr.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/hmac.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/sha.h \
 /home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/kdf.h
../src/addon/core.cpp:
../src/addon/deimos_cipher.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/evp.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/macros.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/opensslconf.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/configuration.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./configuration_asm.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/configuration.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/opensslv.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./opensslv_asm.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/opensslv.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/types.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/e_os2.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/safestack.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./safestack_asm.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/safestack.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/stack.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/core.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/core_dispatch.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/symhacks.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/bio.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./bio_asm.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/bio.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/crypto.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./crypto_asm.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/crypto.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/cryptoerr.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/cryptoerr_legacy.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/bioerr.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/evperr.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/params.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/bn.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/bnerr.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/objects.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/obj_mac.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/asn1.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/./asn1_asm.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/././archs/linux-x86_64/asm/include/openssl/asn1.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/asn1err.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/objectserr.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/hmac.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/sha.h:
/home/mohsin/.cache/node-gyp/22.14.0/include/node/openssl/kdf.h:
