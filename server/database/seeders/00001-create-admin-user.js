'use strict'

const date = new Date()

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          name: 'Admin User',
          email: 'admin@admin.com',
          password: '$2b$13$YDM4hWMVtqf1wOtLQ3uTnO.yyrALrZlMmrTp/ARMtG1XyK9WJMhPO', // password: admin0
          isActive: true,
          createdAt: date,
          updatedAt: date
        }
      ],
      {}
    )
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Users', { email: 'admin@admin.com' }, {})
  }
}
