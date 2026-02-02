class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    if (this.queryString.search) {
      this.query = this.query.find({
        $text: { $search: this.queryString.search }
      });
    }
    return this;
  }

  filter() {
    const filter = {};

    if (this.queryString.author) {
      filter.author = new RegExp(`^${this.queryString.author}$`, "i");
    }

    if (this.queryString.from || this.queryString.to) {
      filter.publishDate = {};
      if (this.queryString.from)
        filter.publishDate.$gte = new Date(this.queryString.from);
      if (this.queryString.to)
        filter.publishDate.$lte = new Date(this.queryString.to);
    }

    this.query = this.query.find(filter);
    return this;
  }

  sort() {
    const sortBy = this.queryString.sortBy || "publishDate";
    const order = this.queryString.order === "asc" ? 1 : -1;
    this.query = this.query.sort({ [sortBy]: order });
    return this;
  }

  paginate() {
    const page = Math.max(1, parseInt(this.queryString.page) || 1);
    const limit = Math.min(50, parseInt(this.queryString.limit) || 10);
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
