import { plainToClass }from 'class-transformer';
import 'reflect-metadata';
import _ from "lodash";
import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");

console.log(_.shuffle([1, 2, 3, 4]));