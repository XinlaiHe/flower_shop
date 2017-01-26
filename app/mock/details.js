"use strict";

const details = [
	{ id: "asuwn2",
	  name: "Jasmine Santa",
	  price: "￥1999",
	  image: "flowers/jasmine",
	  description: "This is a special gift for you friends, family and lover"
	},
	{ id: "asuwn3",
	  name: "Rose Santa",
	  price: "￥999",
	  image: "flowers/rose",
	  description: "This is a special gift for you friends, family and lover"
	},
	{ id: "asuwn4",
	  name: "Lavanda Santa",
	  price: "￥799",
	  image: "flowers/lavanda",
	  description: "This is a special gift for you friends, family and lover"
	},
	{ id: "asuwn5",
	  name: "Jasmine Festive",
	  price: "￥599",
	  image: "flowers/jasmine",
	  description: "This is a special gift for you friends, family and lover"
	},
	{ id: "asuwn5",
	  name: "Rose Festive",
	  price: "￥699",
	  image: "flowers/rose",
	  description: "This is a special gift for you friends, family and lover"
	},
	{ id: "asuwn4",
	  name: "Lavanda Santa",
	  price: "￥899",
	  image: "flowers/lavanda",
	  description: "This is a special gift for you friends, family and lover"
	}
];

export default (id) => details.find((detail) => detail.id === id);
