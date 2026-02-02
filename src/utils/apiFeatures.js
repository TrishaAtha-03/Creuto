class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  // Text search on name and description
  search() {
    if (this.queryString.search) {
      this.query = this.query.find({
        $text: { $search: this.queryString.search }
      });
    }
    return this;
  }

  // Filter by author and publish date range
  filter() {
    const filter = {};

    // Author filter (case-insensitive, exact match, regex-safe)
    if (this.queryString.author) {
      const escapedAuthor = this.queryString.author.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );

      filter.author = new RegExp(`^${escapedAuthor}$`, "i");
    }

    // Publish date range filter
    if (this.queryString.from || this.queryString.to) {
      filter.publishDate = {};

      if (this.queryString.from) {
        filter.publishDate.$gte = new Date(this.queryString.from);
      }

      if (this.queryString.to) {
        filter.publishDate.$lte = new Date(this.queryString.to);
      }
    }

    this.query = this.query.find(filter);
    return this;
  }

  // Sorting
  sort() {
    const sortBy = this.queryString.sortBy || "publishDate";
    const order = this.queryString.order === "asc" ? 1 : -1;

    this.query = this.query.sort({ [sortBy]: order });
    return this;
  }

  // Pagination
  paginate() {
    const page = Math.max(1, parseInt(this.queryString.page, 10) || 1);
    const limit = Math.min(50, parseInt(this.queryString.limit, 10) || 10);
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
