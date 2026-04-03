

 # Malicious File Analysis

For fun, I decided to analyze the behavior of a potentially malicious file. I didn’t want to set up a dedicated sandbox, so the entire analysis is based purely on reading the code and running small experiments in the browser console. I also used AI as an assistant to speed things up.

## Structure

To make sense of the (intentionally) hard-to-read code, I split it into smaller parts:

- `helpers`
- `bootstrap`
- `main`
- `array`

Each part except for `array` exists in two versions:
- **Original** – pretty-printed only  
- **Deobfuscated** – processed using an online JS deobfuscator (with minor logging and tweaks to allow execution in the browser)

All files were copied directly from the original JSON, which is included in this repository.

## High-Level Overview

The entire system revolves around a large array defined in the `array` file.

- **helpers** → functions that transform the array (likely similar to RC4-style operations)  
- **bootstrap** → rotates/prepares the array into the correct state  
- **main** → generates the final payload scripts  

The core logic happens inside `main`, which produces four separate scripts.

## How to Reproduce

You can safely reproduce them by evaluating the `array` and prettyPrinted-*-deobf files in your browser console. Just make sure to run prettyPrinted-bootstrap before prettyPrinted-main. When executed, prettyPrinted-main.js outputs some helper logs and, most importantly, the contents of the four generated scripts. These are the actual payloads that would run on the target machine, and they’re also included in the repository as scriptAA through scriptAD.

Once pretty-printed, these scripts become much easier to read, and their malicious nature becomes quite obvious (even more so if you resolve the obfuscated constants further). I won’t go into full detail here—below is a high-level summary generated with the help of AI:

These scripts are also included in this repo as:

- `scriptAA`
- `scriptAB`
- `scriptAC`
- `scriptAD`

## Payload Analysis

After pretty-printing, the scripts become much easier to read and their intent is much clearer.

### scriptAA – Remote Control / Backdoor

- Connects to a remote server
- Identifies the host
- Executes remote commands:
  - shell execution
  - screenshots
  - mouse control (move/click/scroll)
  - keyboard input
  - clipboard access

---

### scriptAB – Credential & Wallet Theft

Targets sensitive data such as:
- browser credential databases
- autofill/account data
- crypto wallet extension storage
- macOS keychain data

All data is exfiltrated via HTTP.

---

### scriptAC – File System Exfiltration

- Enumerates local drives / home directories
- Recursively scans files
- Skips common system/noise directories
- Targets:
  - documents
  - images
  - source code
  - `.env` files
  - keys, certificates, configs
- Uploads matching files to a remote server

---

### scriptAD – Clipboard Monitoring

- Continuously monitors clipboard
- Detects changes
- Sends copied content to a remote server

---

## Summary

| Script   | Purpose                                      |
|----------|----------------------------------------------|
| **AA**   | Remote control / command execution           |
| **AB**   | Browser, wallet, keychain data theft         |
| **AC**   | File system data exfiltration                |
| **AD**   | Clipboard monitoring                         |

---

## Final Thoughts

Quite an assignment, honestly 🙂

If you're interested in this kind of reverse engineering, feel free to explore further—I definitely had fun digging into it.
"""

output_path = "/mnt/data/malicious_analysis.md"
convert_text(md_content, 'md', format='md', outputfile=output_path, extra_args=['--standalone'])

output_path
