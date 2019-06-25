import {mount, shallow} from "enzyme";
import React from "react";
import SignIn from "../src/Containers/SignIn";
import SInfo from 'react-native-sensitive-info';
import SignOut from "../src/Components/SignOut";


jest.mock('react-native-sensitive-info', () => ({
    deleteItem: jest.fn()
}));

describe("Sign In", () => {
    let wrapper;
    let mockNavigation;
    beforeEach(() => {
        jest.resetAllMocks();
        mockNavigation = {
            navigate: jest.fn(),
        };
        wrapper = shallow(<SignOut navigation={mockNavigation}/>);
    });

    it("should render button to sign in", () => {
        SInfo.getItem.mockResolvedValue(false);
        const signInButton = wrapper.find({testID: "signOut"});
        expect(signInButton).toHaveLength(1);
    });

    it("should navigate to sign in page when clicked on sign out" , (done) =>{
        SInfo.deleteItem.mockResolvedValue({});
        wrapper.find({testID: 'signOut'}).first().simulate('press');
        setImmediate(()=> {expect(mockNavigation.navigate).toHaveBeenCalledWith('Auth');})
        done();
    });

});


