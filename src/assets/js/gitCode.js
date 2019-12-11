const fs = require('fs')
const chalk = require('chalk')

const gitCode = () => {
    // 获取git版本

    const gitHEAD = fs.readFileSync('.git/HEAD', 'utf-8').trim()
    // eslint-disable-next-line prefer-destructuring
    const ref = gitHEAD.split(': ')[1]
    // eslint-disable-next-line prefer-destructuring
    const develop = gitHEAD.split('/')[2]
    const gitVersion = fs.readFileSync(`.git/${ref}`, 'utf-8').trim()
    const gitCommitVersion = `"${develop}-source-git-code: ${gitVersion}"`
    console.log(gitCommitVersion)
    fs.writeFile(
        `${__dirname}/../../../dist/source-version.txt`,
        gitCommitVersion,
        'utf8',
        error => {
            if (error) {
                console.error(error)
                return false
            }
            console.log(chalk.green('写入GitCode成功'))
        }
    )
}
module.exports = gitCode
