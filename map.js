var transformers = [
  {
    name: 'Optimus Prime',
    form: 'Freightliner Truck',
    team: 'Autobot'
  },
  {
    name: 'Megatron',
    form: 'Gun',
    team: 'Decepticon'
  },
  {
    name: 'Bumblebee',
    form: 'VW Beetle',
    team: 'Autobot'
  },
  {
    name: 'Soundwave',
    form: 'Walkman',
    team: 'Decepticon'
  }
];

var orders = [
{amount :50 },
{amount :100 },
{amount :150 },
{amount :200 },
{amount :250 },
]

var names = transformers.map((x) => x.name);

var totalAmount = orders.reduce((sum,order) => {
	console.log('Iterated :',sum,order);
	return sum+order.amount},0)
 

console.log('Total amount: ',totalAmount);
console.log('List of transformers name',names);
