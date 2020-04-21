<template>
    <panel-item :field="field">
        <div slot="value">
            <p class="leading-normal"><strong>Voltlib Version:</strong> {{ field.value.voltlib_version || '-'}}</p>
            <p class="leading-normal"><strong>Release Build:</strong> {{ field.value.release_build || '-'}}</p>
        </div>
    </panel-item>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
}
</script>
