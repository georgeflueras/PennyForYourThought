import { Injectable } from "@angular/core";

@Injectable()
export class LocalDbService {
    private db: Object;
    
    constructor() {
        this.load();
    }

    add<T>(table: string, entity: T) {
        if (!this.db[table]) {
            this.db[table] = [];
        }
        this.db[table].push(entity);
        this.save();
    }

    get<T>(table, propertyName, propertyValue) {
        if (!this.db[table]) {
            return;
        }
        return this.db[table].find((entity: T) => entity[propertyName] === propertyValue);
    }

    getAll<T>(table, propertyName, propertyValue){
        if (!this.db[table]) {
            return;
        }

        if(!propertyValue){
            return this.db[table];
        } else {
            return this.db[table].filter((entity: T) => entity[propertyName] === propertyValue);
        }
    }

    delete<T>(table, thought) {
        const thoughtToDelete = this.db[table].find((entity: T) => entity['email'] === thought.email && entity['date'] === thought.date);
        console.log(thoughtToDelete);
        this.db[table] = this.db[table].filter((entity: T) => entity !== thoughtToDelete );
        this.save();
    }

    update<T>(table, thought, property, newTotalPennies){
        if (!this.db[table]) {
            return;
        }
        let existingRecord = this.db[table].find((entity: T) => entity['email'] === thought.email && entity['date'] === thought.date);
        existingRecord[property] = thought[property];
        existingRecord['totalPennies'] = newTotalPennies;
        this.save();
    }

    save() {
        localStorage.setItem('database', JSON.stringify(this.db));
    }

    load() {
        let storedDatabase = JSON.parse(localStorage.getItem('database'));
        if (!storedDatabase) {
            storedDatabase = {};
        }
        this.db = storedDatabase;
    }
}
