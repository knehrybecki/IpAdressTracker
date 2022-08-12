export type Dictionary = {
  components: {
    app:{
      loading: string,
      error: string,
    },
    header: {
      title: string
    }
  },
  networkInfo : {
    ip : string,
    location : string,
    timezone : string,
    isp : string,
    utc: string,
},
}
