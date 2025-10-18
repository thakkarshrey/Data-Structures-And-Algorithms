class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null
    }

    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    addLast(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return
        }

        let current = this.head
        while(current.next){
            current = current.next
        }

        current.next = newNode
    }

    size(){
        let count = 0
        let current = this.head
        while(current){
            count++
            current = current.next
        }
        return count
    }

    addAt(index, data){
        if(index<0 || index>this.size()){
            console.error("Invalid index")
            return
        }

        if(index === 0){
            this.addFirst(data)
        }

        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next            
        }

        const newNode = new Node(data)
        newNode.next = current.next
        current.next = newNode
    }

    removeFirst(){
        if(!this.head) return
        this.head = this.head.next
    }

    removeLast(){
        if(!this.head) return

        let current = this.head
        while(current.next.next){
            current = current.next
        }

        current.next = null
    }

    removeAt(index){

        if(index<0 || index>this.size()){
            console.error("Invalid index")
            return
        }

        if(index === 0){
            this.removeFirst()
            return
        }

        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next            
        }

        if(current.next) current.next = current.next.next
    }

    print(){
        let current = this.head
        while(current){
            console.log(current,'current')
            console.log(current.data,'data')
            current = current.next
        }
    }
}

const linkedList = new LinkedList()

linkedList.addFirst(5)
linkedList.addFirst(6)
linkedList.addFirst(7)
linkedList.addLast(1)
linkedList.addAt(2, 100)
linkedList.removeFirst()
linkedList.removeLast()
linkedList.removeAt(1)

linkedList.print()
