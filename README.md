# Training Schedule:

Training starts with Week 5 since weeks 1-4 were covered in ROC1

- Week 5: Front End Development
  - [PokeDex UI](https://github.com/200914ROC2/5w-pokedex-ui)
- Week 6: Angular
- Week 7: DevOps/AWS
- Week 8: AWS Certified Cloud Practitioner Prep

# Development Environment, Tools, & Resources

## Getting Started

For ROC2, you will need the following installed on your local machine:

- node.js
- git
- your favorite text editor/IDE (I will be using Visual Studio Code)

You can install these in any way that you like. Below there are instructions on how to perform this installation using a package manager. However, of course you are always free to install them manually.

## Tools

### Package Managers

- [Chocolatey for Windows](https://chocolatey.org)
- [Scoop for Windows](https://scoop.sh/)

### Command-line tools

- [Git](https://git-scm.com)

### Editors

- [Visual Studio Code](https://code.visualstudio.com/)

## Installing Git, Node, and VSC with Chocolatey

1. Install [Chocolatey](https://chocolatey.org)
   1. Open `Powershell` as an administrator.
   2. Run:
      > Set-ExecutionPolicy AllSigned
   3. Agree to all changes
   4. Run:
      > Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
2. Open a new `Powershell` window as an administrator and run the following commands:
3. To install [Git for Windows](https://git-scm.com):
   > choco install git
4. To install [Node.js (LTS version)](https://nodejs.org/en/):
   > choco install nodejs-lts
5. To install [Visual Studio Code](https://code.visualstudio.com/):
   > choco install vscode

### Summary

To confirm all tools are properly installed and configured, be sure the following commands return no errors:

```bash
git --version
node -v
npm -v
```

All above tools can be installed at once for convenience using the following command:

> choco install -y git nodejs-lts vscode

## Useful Resources

### Git

- [Git Documentation](https://git-scm.com/doc)
- [GitHub - Resources to Learn Git](http://try.github.io/)
- [Gitignore.io - .gitignore generator](https://www.gitignore.io/)

### JavaScript

- [MDN JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [Node.js Docs](https://nodejs.org/en/docs/)

### Java SE 8

- [Java SE 8 Documentation](https://docs.oracle.com/javase/8/docs/)
- [Java SE 8 Specification](https://docs.oracle.com/javase/specs/jls/se8/html/)
- [Oracle Java Tutorials](https://docs.oracle.com/javase/tutorial/)
- [Think Java Textbook](https://books.trinket.io/thinkjava/index.html)

### Maven

- [Maven - Getting Started](http://maven.apache.org/guides/getting-started/index.html)
- [Maven by Example](https://books.sonatype.com/mvnex-book/reference/index.html)

### SQL

- [Database Design Textbook](https://opentextbc.ca/dbdesign01/)
- [SQLBolt Exercises](https://sqlbolt.com/)
- [Postgres Exercises](https://pgexercises.com/)
