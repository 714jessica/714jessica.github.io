
let n=parseInt(prompt("请输入菱形的边长："))
for(let i=1;i<=n;i++){
    for(let j=1;j<=n+i-1;j++){
            if(j+i<=n)
                // console.log('-')
                document.write('-');
            else
                //console.log('*')
                document.write('*');
    }
    document.write("<br>");
}
for(let i=1;i<=n-1;i++){
    for(let j=1;j<=2*n-1-i;j++){
        if(j+i<=2*i)
            //console.log('-')
            document.write('-');
        else
            //console.log('*')
            document.write('*');
    }
    document.write("<br>");
}