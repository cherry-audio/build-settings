<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <div class="mb-4">
                <label
                    for="voltlib_version"
                    class="text-80 leading-tight block mb-2"
                >Voltlib Version</label>
                <input
                    type="text"
                    id="voltlib_version"
                    class="w-full form-control form-input form-input-bordered"
                    :class="errorClasses"
                    placeholder="Voltlib Version"
                    v-model="field.value.voltlib_version"
                >
            </div>

            <div class="mb-4">
                <label for="release_build" class="text-80 leading-tight block mb-2">Release Build</label>
                <input
                    type="text"
                    id="release_build"
                    class="w-full form-control form-input form-input-bordered"
                    :class="errorClasses"
                    placeholder="Release Build"
                    v-model="field.value.release_build"
                >
            </div>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from "laravel-nova";

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ["resourceName", "resourceId", "field"],

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            if (_.isEmpty(this.field.value)) {
                this.value = JSON.stringify({});
                this.field.value = {};
            } else {
                this.value = JSON.stringify(this.field.value);
            }
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || "");
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value;
        }
    },

    watch: {
        field: {
            handler() {
                this.value = JSON.stringify(this.field.value);
            },
            deep: true
        }
    }
};
</script>
