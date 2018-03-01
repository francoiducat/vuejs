export default {
  name: 'select-mag',
  components: {},
  props: [],
  data () {
    return {
      storesList: [
        {id: 118, name: 'Campus'},
        {id: 15, name: 'Villeneuve'},
        {id: 648, name: 'Btwin village'}
      ],
      selectedStore: {}

    }
  },
  computed: {
  },
  mounted () {

  },
  methods: {
    changeStore () {
      console.log(this.selectedStore.id)
    }
  }
}
