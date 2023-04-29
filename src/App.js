import Banner from './Banner'
import logo from '../assets/leaf+1.png'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison j</h1>
			</Banner>
			{/* <Cart /> */}
			<ShoppingList />
		</div>
	)
}

export default App