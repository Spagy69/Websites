class Frame {
    constructor(dmac, smac, type, data, fcs) {
        this.dmac = dmac;
        this.smac = smac;
        this.type = type;
        this.data = data;
        this.fcs = fcs;
    }

    setDMac(newDMac) {
        this.dmac = newDMac;
    }
    setSMac(newSMac) {
        this.smac = newSMac;
    }
    setType(newType) {
        this.type = newType;
    }
    setData(newData) {
        this.data = newData;
    }
    setFcs(newFcs) {
        this.fcs = newFcs;
    }

    getDMac() {
        return this.dmac;
    }
    getSMac() {
        return this.smac;
    }
    getType() {
        return this.type;
    }
    getData() {
        return this.data;
    }
    getFcs() {
        return this.fcs;
    }
}

f1 = new Frame("AA:BB:CC:DD:EE:FF", "11:22:33:44:55:66", "ARP", "Hello", "1234")

console.log(f1.getDMac());
console.log(f1.getSMac());
console.log(f1.getType());
console.log(f1.getData());
console.log(f1.getFcs());
