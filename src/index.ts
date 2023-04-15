import { User } from "./User";
import { Company } from "./Company";
import { Hospital } from "./Hospital";
import { CustomMap } from "./CustomMap";
// import { IMappable } from "./CustomMap";

const customMap = new CustomMap("map");

const user = new User();
const company = new Company();
const hospital = new Hospital();

customMap.addMarker(user);
customMap.addMarker(company);
customMap.addMarker(hospital);
