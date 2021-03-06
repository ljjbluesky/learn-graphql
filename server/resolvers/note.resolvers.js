module.exports = {
  Query: {
    notes (_, { uId }, { dataSources, auth }) {
      return dataSources.NoteDatasource.getNotes({
        uId
      }, auth)
    },
    note (_, { id }, { dataSources, auth }) {
      return dataSources.NoteDatasource.getNoteById({
        id
      }, auth)
    },
    meNote (_, __, { dataSources, auth }) {
      return dataSources.NoteDatasource.getCurrentUserNote(auth)
    }
  },
  Mutation: {
    addNote (_, { note }, { dataSources, auth }) {
      return dataSources.NoteDatasource.addNote(note, auth)
    },
    updateNote (_, { note }, { dataSources, auth }) {
      return dataSources.NoteDatasource.updateNote(note, auth)
    },
    deleteNote (_, { id }, { dataSources, auth }) {
      return dataSources.NoteDatasource.deleteNote({
        id
      }, auth)
    }
  }
}
