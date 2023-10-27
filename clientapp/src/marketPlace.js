const ListOfLand = [
    {
        name:'land1',
        location : "chn",
        element : <h3> Land 1</h3>
    },
    {
        name:'land2',
        location:'cbe',
        element : <h3> Land 2</h3>
    }
]

const ListOfElements = [
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
];

export default function ListedLand(){
    return (
        <div>
            <h1>List of Elements</h1>
            <ul>
                {ListOfLand.map((land) => (
                    // <li key={land.name}>{land.element}</li>
                    <h3> {land.name}</h3>
                ))}
            </ul>
        </div>
    );
} 