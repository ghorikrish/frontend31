
var express = require('express');
var parser = require('body-parser');
var app = express();

// /mildware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //new line added

const RUOTE = '/mytrip';
let addtrip = [
    {'name':'Mumbia To Ahemdabad', 'price':'3500'},
    {'name':'Kutch To Surat', 'price':'4100'},
    {'name':'Ahemdabad To Gandhinagar', 'price':'6000'},
]

app.get(RUOTE,function(request,response){
    response.json('addtrip');
});

app.post(RUOTE,function(request,response){
    let name = request.body.name;
    let price = request.body.price;
    let newtrip = {'name':name,'price':price};
    mytrip.push(newtrip);
    response.send('new trip added');
});

app.put(RUOTE,function(request,response){
    let name = request.body.name;
    let newname = request.body.newname;
    let newprice = request.body.newprice;
    let size = mytrip.length;
    let index=0;
    for(index=0;index<size;index++)
    {
        //console.log(mytrip[index].name, mytrip[index].mobile);
        if (C[index].name === name)
        {
            let name = request.body.name;
    let newname = request.body.newname;
    let newprice= request.body.newprice;
    let size = mytrip.length;
    let index=0;
    for(index=0;index<size;index++)
    {
        //console.log(mytrip[index].name, mytrip[index].mobile);
        if (mytrip[index].name === name)
        {
            mytrip[index].name = newname;
            mytrip[index].mobile = newprice;
            break;
        }
    }   
    if (index < size)
        response.send('trip updated');
    else
        response.send('trip not found'); [index].name = newname;
            mytrip[index].mobile = newprice;
            break;
        }
    }   
    if (index < size)
        response.send('trip updated');
    else
        response.send('trip not found'); 
});

app.delete(RUOTE,function(request,response){
    let name = request.body.name;

    response.send('delete request for accept mytrip ruote')
});

const PORTNO = 5000;
app.listen(PORTNO,function(error){
    if(error)
        console.log('error');
    else
        console.log('sever is ready  to accept request')
})


