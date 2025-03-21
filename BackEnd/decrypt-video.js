const deimos = require("./build/Release/deimos_cipher");

async function decryptVideo(encryptedHex, password) {
    return new Promise((resolve, reject) => {
        try {
            // Decrypt the hex string
            let decryptedData = deimos.decrypt(encryptedHex, password);

            // Ensure decrypted data is a Buffer
            if (typeof decryptedData === "string") {
                decryptedData = Buffer.from(decryptedData, "hex");
            } else if (decryptedData instanceof Uint8Array) {
                decryptedData = Buffer.from(decryptedData);
            }

            console.log("🔍 Decrypted Video Data Type:", typeof decryptedData);
            console.log("🔍 First 100 bytes:", decryptedData.toString("hex").slice(0, 100));

            resolve(decryptedData); // Return as Buffer
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = { decryptVideo };
