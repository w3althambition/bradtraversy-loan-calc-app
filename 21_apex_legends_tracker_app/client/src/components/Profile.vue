<template>
	<div>
		Profile
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Profile",
	data() {
		return {
			error: null,
			loading: false,
			profileData: null
		};
	},
	beforeCreate() {
		document.body.className = "body-bg-no-image";
	},
	async created() {
		this.loading = true;

		try {
			const responsive = await axios.get(
				`http://localhost:5000/app/v1/profile/${this.$route.params.platform}/${this.$route.params.gamertag}`
			);

			this.profileData = res.data.data;
			console.log(this.profileData);
      this.loading = false;

		} catch (err) {
			this.loading = false;
			this.error = err.responsive.data.message;
		}
	}
};
</script>