import {mount, shallow} from "enzyme";
import React from "react";
import SignIn from "../src/Containers/SignIn";
import SInfo from 'react-native-sensitive-info';


jest.mock('react-native-sensitive-info', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
}));

describe("Sign In", () => {
    let wrapper;
    let mockNavigation;
    beforeEach(() => {
        jest.resetAllMocks();
        mockNavigation = {
            navigate: jest.fn(),
        };

        wrapper = shallow(<SignIn navigation={mockNavigation}/>);
    });

    it("should render button to sign in", () => {
        const signInButton = wrapper.find({testID: "signIn"});
        expect(signInButton).toHaveLength(1);
    });

    // it("should change state when user clicks on sign in" , () =>{
    //     wrapper.find({testID: 'signIn'}).first().simulate('press');
    //     // wrapper.find({testID: 'signIn'}).props().onPress();
    //     expect(wrapper.state().isLoggedIn).toBe(true);
    // });
    //
    // it("should change state when user clicks on sign in" , () =>{
    //     wrapper.find({testID: 'signIn'}).first().simulate('press');
    //     wrapper.find({testID: 'signIn'}).first().simulate('press');
    //     // wrapper.find({testID: 'signIn'}).props().onPress();
    //     expect(wrapper.state().isLoggedIn).toBe(false);
    // });

    it("should navigate to home page when clicked on sign in" , () =>{
        SInfo.getItem.mockResolvedValue(false);
        wrapper.find({testID: 'signIn'}).first().simulate('press');
        // wrapper.find({testID: 'signIn'}).props().onPress();
        expect(mockNavigation.navigate).toHaveBeenCalledWith('App');
    });



});


