class ValidationError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "ValidationError";
    if (code) this.code = code;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}

module.exports = { ValidationError, NotFoundError };
