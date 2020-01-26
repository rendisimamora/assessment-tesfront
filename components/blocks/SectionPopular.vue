<template>
  <div class="my-5">
    <H2 title="Popular Groups" />
    <div class="mb-3 d-flex justify-space-between">
      <p class="subheading secondary--text">Where the beauty TALK are</p>

      <a href="#" class="subheading font-weight-medium text-none primary--text">
        See more
        <v-icon class="icon primary--text">keyboard_arrow_right</v-icon>
      </a>
    </div>
    <div class="item">
      <div class="py-5 overflow-auto-y">
        <div class="d-flex ml-1 mr-5">
          <CardPopularGroup
            v-for="(item, i) in items"
            :key="i"
            :avatar="item.avatar"
            :name="item.name"
            :description="item.description"
            :users="item.users"
            :list="item.list"
            :comments="item.comments"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar:
          "https://static.femaledaily.com/dyn/230/fdn-talk/groups/image/fdn_comm_acne_warrior.png",
        name: "Acne Warrior",
        users: 3678,
        list: 118,
        comments: 312,
        description:
          "Don't give up with your acnes yet, we're here to support you"
      },
      {
        avatar:
          "https://static.femaledaily.com/dyn/230/fdn-talk/groups/image/fdn_comm_skincare_newbies.png",
        name: "Skincare Newbies",
        users: 3505,
        list: 160,
        comments: 259,
        description: "All those skincare tips your skin will thank you for"
      },
      {
        avatar:
          "https://static.femaledaily.com/dyn/230/fdn-talk/groups/image/fdn_comm_oily_mess_2.png",
        name: "Oily Mess",
        users: 1577,
        list: 35,
        comments: 75,
        description: "Show your oily skin who’s the boss 😎"
      },
      {
        avatar:
          "https://static.femaledaily.com/dyn/230/fdn-talk/groups/image/fdn_comm_dare_to_splurge.png",
        name: "Dare to Splurg",
        users: 579,
        list: 16,
        comments: 65,
        description: "When you feel like giving your skin a treat✨"
      }
    ]
  })
};
</script>
