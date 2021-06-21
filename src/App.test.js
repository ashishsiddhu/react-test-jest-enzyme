import { render, screen } from '@testing-library/react';
import App from './App';
import Content from './Content';
import {shallow,mount} from 'enzyme';

describe("Combine tests", () => {
  let wrapper;
  let wrapperData;
  // // beforeEach run before following cases.
  beforeEach(()=>{
    wrapper = shallow(<App />); // Shallow will get current component data 
    // console.log(wrapper.debug());
    wrapperData = mount(<App />); // Mount will get current component data as well as child component data 
  })
  it("should be an <h> element",()=>{
    // const wrapper = shallow(<App />);
    //console.log(wrapper.debug());
    expect(wrapper.find('h1').exists()).toBe(true);
  });
  it("should be an <h> text",()=>{
    // const wrapper = shallow(<App />);
    expect(wrapper.find("h1").text()).toContain("This is counter app");
  });

  it("should be content element",()=>{
    expect(wrapper.find("Content").exists()).toBe(true);    
  })
  it("should be content element paragraph",()=>{
    expect(wrapperData.find("p").exists()).toBe(true);    
  })
  it("should be content element button",()=>{
    expect(wrapperData.find("button").exists()).toBe(true);    
  })
  it("should be content element button text",()=>{
    expect(wrapperData.find("button").text()).toContain("Click me");   
  })
  it("should render a button where element id is increment",()=>{
    expect(wrapperData.find("#increment").text()).toContain("Click me");   
  })
  it("should be content element button props",()=>{
    const counterElement = mount(<Content data="Click me" />);
    expect(counterElement.props().data).toContain('Click me');
  })
  it("should be render initial value of button",()=>{
    expect(wrapperData.find("#counterValue").text()).toBe("0");
  })
  it("should be render incremental click button value",()=>{
    wrapperData.find("#increment").simulate("click");
    expect(wrapperData.find("#counterValue").text()).toBe("1");
  })
})