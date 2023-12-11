import  express  from "express";
import cors from 'cors';
const app = express();
app.use(cors())

app.get('/', (req, res) =>{
    res.send('Server is Ready');
}); 

// get list of five jokes

app.get('/api/jokes' , (req, res) =>{
    const jokes=[
        {
            id:1,
            title: 'A Joke',
            content: "Chuck Norris eats out only at buffet's. this is because no one serves Chuck Norris and lives.",
        },
        {
            id:2,
            title: 'Another Joke2',
            content: "Chuck Norris never has to drive his car.He tells the car what to do. Start,go,stop,left,right,foward reverse,headlights on and off, wipe my windshield.",
        },
        {
            id:3,
            title: 'Another Joke3',
            content: "Chuck Norris gave 5 of his old watches to some teenages. Those teenagers are now known as the Power-Rangers",
        },
        {
            id:4,
            title: 'Another Joke4',
            content: "Chuck Norris won a boxing match in a straight jacket.",
        },
        {
            id:5,
            title: 'Another Joke5',
            content: "Chuck Norris does, in fact, live in a round house.",
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`Listen to port ${port}`)
});

