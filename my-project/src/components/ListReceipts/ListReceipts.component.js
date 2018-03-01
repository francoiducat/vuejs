export default {
  name: 'list-receipts',
  components: {},
  props: [],
  data () {
    return {
      listOfReceipts: [
        {
          header: [{line: 1, value: ' line 1'}, {line: 2, value: ' line 2 '}, {line: 3, value: ' line 3'}],
          footer: [{line: 1, value: ' line 1 '}, {line: 2, value: ' line 2 '}, {line: 3, value: ' line 3'}],
          storeNumber: 118,
          active: 'true',
          name: 'old'
        },
        {
          header: [{line: 1, value: ' line 1'}, {line: 2, value: ' line 2 '}, {line: 3, value: ' line 3'}],
          footer: [{line: 1, value: ' line 1 '}, {line: 2, value: ' line 2 '}, {line: 3, value: ' line 3'}],
          storeNumber: 118,
          active: 'false',
          name: 'receipt yolo'
        },
        {
          header: [{line: 1, value: ' line 1'}, {line: 2, value: ' line 2 '}, {line: 3, value: ' line 3'}],
          footer: [{line: 1, value: ' line 1 '}, {line: 2, value: ' line 2 '}, {line: 3, value: ' line 3'}],
          storeNumber: 648,
          active: 'false',
          name: 'reglo'
        },
        {
          header: [{line: 1, value: ' line 1'}, {line: 2, value: ' line 2 '}, {line: 3, value: ' line 3'}],
          footer: [{line: 1, value: ' line 1 '}, {line: 2, value: ' line 2 '}, {line: 3, value: ' line 3'}],
          storeNumber: 15,
          active: 'true',
          name: 'tarantino'
        }
      ]

    }
  },
  computed: {},
  mounted () {

  },
  methods: {}
}
