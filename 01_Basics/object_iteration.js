const myObj = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'ruby',

}
for (const key in myObj) {
    console.log(`${key} shortcut for ${myObj[key]}`)
    
}
