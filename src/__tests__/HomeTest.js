import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import Enzyme, { shallow, mount, EnzymeAdapter } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import  Home from '../components/Home';
import store from '../store.js'
import Header from '../components/Header'

Enzyme.configure({ adapter: new Adapter() })




describe('Home component Test', () => {
    test('Renders Home component', () => {
      render(<Provider store={store}>
      <Home /></Provider>  );
    //   screen.debug();
    expect(screen.getByText('Bookstore')).toBeInTheDocument();

    });

  
  });

  describe('Header component Test',()=>{
    test("Test searchbar",() =>{

      render(<Header/>)
      
      expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    });

    
    test("test inputfield searchbar",()=>{

      render(<Header/>)
      const searchInput = getByPlaceholderText("Search");
      fireEvent.change(searchInput, { target: { value: "alchemist" } });
      expect(searchInput.value).toBe("alchemist");


    })


  })

