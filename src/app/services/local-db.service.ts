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

    delete<T>(table, propertyName, propertyValue) {
        this.db[table] = this.db[table].filter((entity: T) => entity[propertyName] !== propertyValue)
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
