import React from 'react';
import {shallow} from 'enzyme'
import Account from './account-component';
import toJson from 'enzyme-to-json'
import App from "./App"
import * as app from "./App"
import * as sample from "./function.js"

const user = {
  name: 'revanth',
  email: 'example.com',
  username: 'revdd'
}

describe("testing the events inside the app component", () => {

/*
      it("accepts user account props", ()=> {
      const wrapper = mount(<Account profile={user}/>);
      expect(wrapper.props().profile).toEqual(user);
    });


    it("contains users account email", () => {
      const wrapper = mount(<Account profile={user}/>);
      const email = wrapper.find("p").text()
      expect(email).toEqual("example.com")
    })
*/
    //snapshot test case:

    it("starts with count 0", () => {
       const wrapper = shallow(<App/>);
        const text = wrapper.find("p").text();
        expect(text).toEqual("Count: 0")
    })
    it("increments the value of the count by 1",() => {
        const wrapper = shallow(<App/>);
        const incrButton = wrapper.find("button.increment");
        incrButton.simulate("click");
        const text = wrapper.find("p").text()
        expect(text).toEqual("Count:1")
    })
    it('acccount comp renders correctly', () => {
        const tree = shallow(<Account/>);
        expect(toJson(tree)).toMatchSnapshot();
    })

      sample.sampleFunction = jest.fn();
      sample.sampletwoFunction =  jest.fn();


      test("calls sample.samplefunction", () => {
          app.forTest(20,10);
          expect(sample.sampleFunction).toHaveBeenCalled(20,10)
      })
        // jest.spyOn
})



