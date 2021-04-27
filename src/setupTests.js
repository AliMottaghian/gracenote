import "regenerator-runtime/runtime";
import { configure, shallow, render,mount } from "enzyme";
import { createSerializer,toJson } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;
global.render = render;
global.toJson = toJson
