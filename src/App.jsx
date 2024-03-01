import LoginForm from './Components/LoginForm';
import TemperatureConverter from './Components/TemperatureConverter';
import Accordian from './Components/Accordian';
import CustomCursor from './Components/CurstomCursor';
import Counter from './Components/Counter';
import Select from './Components/Select';
import StudentList from './Components/StudentList';
import GitHubRepositories from './Components/GitHubRepositories';
import TrafficLight from './Components/TrafficLight';
import WeatherInfo from './Components/WeatherInfo';
import MultiSelect from './Components/MultiSelect';
import WeatherApi from './Components/WeatherApi';
import MyTodo from './Components/MyTodo';
import Ani from './Components/Ani';
import Button from './Components/Button';
import CountryDropDown from './Components/ContryDropDown';
import ConditionCounter from './Components/ConditionCounter';
import SalesData from './Components/SalesData';
import LightModeDarkMode from './Components/LightModeDarkMode';
import StopWatch from './Components/StopWatch';
import FramerMotion from './Components/FramerMotion';
import MockUser from './Components/MockUser';
import WeatherCrio from './Components/WeatherCrio';
import Greet from './Components/Greet';
import Dictionary from './Components/Dictionary';

const theme = {
	primary: {
		default: '#2b2b2b',
		hover: '#4c4c4c',
		active: '#1a1a1a',
	},
	secondary: {
		default: '#d2d2d2',
		hover: '#e2e2e2',
		active: '#c2c2c2',
	},
};

const App = () => {
	const handleClick = () => {
		console.log('Button clicked!');
	};
	return (
		<>
			<div className='main'>
				{/* <LoginForm /> */}
				{/* <TemperatureConverter /> */}
				{/* <Accordian /> */}
				{/* <CustomCursor /> */}
				{/* <Counter /> */}
				{/* <Select /> */}
				{/* <StudentList /> */}
				{/* <GitHubRepositories /> */}
				{/* <TrafficLight /> */}
				{/* <WeatherInfo temperature={60} /> */}
				{/* <MultiSelect /> */}
				{/* <WeatherApi lat={12.880505} long={77.608192} /> */}
				{/* <WeatherApi lat={23.003992} long={72.546074} /> */}
				{/* <MyTodo /> */}
				{/* <Ani /> */}
				{/* <Button
					type='primary'
					text='Primary Button'
					onClick={handleClick}
					theme={theme}
				/> */}
				{/* <CountryDropDown /> */}
				{/* <ConditionCounter /> */}
				{/* <SalesData /> */}
				{/* <LightModeDarkMode /> */}
				{/* <StopWatch /> */}
				{/* <FramerMotion /> */}
				{/* <MockUser /> */}
				{/* <WeatherCrio /> */}
				<Dictionary />
			</div>
		</>
	);
};

export default App;
